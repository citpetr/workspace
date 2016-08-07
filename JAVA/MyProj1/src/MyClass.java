
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.StringTokenizer;

public class MyClass {
	public static void main(String[] args) {
		MyClass myc = new MyClass();
		myc.go();
	}
	public void go() {
		String adr = "http://download.finance.yahoo.com/d/quotes.csv?s=LUKOY&amp;"
				+ "f=sl1d1t1c1ohgv&amp;e=.csv";
		try {
			String stockQuote;
			URL stockURL = new URL(adr);
			URLConnection urlConn = stockURL.openConnection();
			InputStream is = urlConn.getInputStream();
			InputStreamReader isr = new InputStreamReader(is);
			BufferedReader bfr = new BufferedReader(isr);
			stockQuote = bfr.readLine();
			String[] arrStkQuot = stockQuote.split(",");
			for (String a : arrStkQuot) {
				System.out.println();
			}
			StringTokenizer tokens = new StringTokenizer(stockQuote,",");
			String oneStr = tokens.nextToken();
			String twoStr = tokens.nextToken();
			String threeStr = tokens.nextToken();
			String fourStr = tokens.nextToken();
			System.out.println(oneStr+" " + twoStr + " " + threeStr + " " + fourStr);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		} finally {
			
		}
	}
}