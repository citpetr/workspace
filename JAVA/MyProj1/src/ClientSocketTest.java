import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;
import java.net.UnknownHostException;

public class ClientSocketTest {
	private Socket clientSocket = null;
	BufferedReader inbound = null;
	OutputStream outbound = null;
	public static void main(String[] args) {
		ClientSocketTest cst = new ClientSocketTest();
		cst.go();
	}
	public void go() {
		try {
			clientSocket = new Socket("petruch0.ru",4022);
			inbound = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
			outbound = clientSocket.getOutputStream();
			String quote;
			outbound.write(("AAPL"+"\n").getBytes());
			outbound.write("End\n".getBytes());
			while(true) {
				quote = inbound.readLine();
				if ("End".equals(quote)){
					break;
				}
				System.out.println("Got the quote for " + "AAPL" + ":" + quote);
			}
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				inbound.close();
				outbound.flush();
				outbound.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
