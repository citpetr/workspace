import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerSocketTest {
	ServerSocket servSocket = null;
	Socket client = null;
	BufferedReader inbound = null;
	OutputStream outbound = null;
	public static void main(String[] args) {
		ServerSocketTest sst = new ServerSocketTest();
		sst.go();
	}
	public void go() {
		try {
			servSocket = new ServerSocket(4022);
			
			while (true) {
				client = servSocket.accept();
				inbound = new BufferedReader(new InputStreamReader(client.getInputStream()));
				outbound = client.getOutputStream();
				String symbol = inbound.readLine();
				String price = (new Double(Math.random()*100)).toString();
				outbound.write(("\n The price of " + symbol + " is " + price + "\n").getBytes());
				System.out.println("Request for " + symbol + 
						" has been processed - the price of " + symbol + " is " + price + "\n");
				outbound.write("End\n".getBytes());
			}	
		} catch (IOException e) {
			System.out.println("Error in server " + e);
		} finally {
			try {
				inbound.close();
				outbound.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
	}
}
