/*
 *  This sketch demonstrates how to set up a simple HTTP-like server.
 *  The server will set a GPIO pin depending on the request
 *    http://server_ip/gpio/0 will set the GPIO2 low,
 *    http://server_ip/gpio/1 will set the GPIO2 high
 *  server_ip is the IP address of the ESP8266 module, will be 
 *  printed to Serial when the module is connected.
 */

#include <ESP8266WiFi.h>

const char* ssid = "rulezzz";
const char* password = "be55amemuch0";

// Create an instance of the server
// specify the port to listen on as an argument
WiFiServer server(80);

void setup() {
  Serial.begin(115200);
  delay(10);

  // prepare GPIO2
  pinMode(14, OUTPUT);
  digitalWrite(14, 0);
  pinMode(15, OUTPUT);
  digitalWrite(15, 0);
  pinMode(16, OUTPUT);
  digitalWrite(16, 0);
  
  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  
  // Start the server
  server.begin();
  Serial.println("Server started");

  // Print the IP address
  Serial.println(WiFi.localIP());
}

void loop() {
  // Check if a client has connected
  WiFiClient client = server.available();
  if (!client) {
    return;
  }
  
  // Wait until the client sends some data
  Serial.println("new client");
  while(!client.available()){
    delay(1);
  }
  
  // Read the first line of the request
  String req = client.readStringUntil('\r');
  Serial.println(req);
  client.flush();
  
  // Match the request
  int val;
  int val1;
  int val2;
  if (req.indexOf("/offred") != -1)
    {
    val = 0;
    digitalWrite(14, val);
    }
  else if (req.indexOf("/onred") != -1)
    {
    val = 1;
    digitalWrite(14, val);
    }
  else if (req.indexOf("/offgreen") != -1)
    {
    val1 = 0;
    digitalWrite(15, val1);
    }
  else if (req.indexOf("/ongreen") != -1)
    {
    val1 = 1;
    digitalWrite(15, val1);
    }
  else if (req.indexOf("/offrelay") != -1)
    {
    val2 = 0;
    digitalWrite(16, val2);
    }
  else if (req.indexOf("/onrelay") != -1)
    {
    val2 = 1;
    digitalWrite(16, val2);
    }
  else {
    Serial.println("invalid request");
    client.stop();
    return;
  }

  // Set GPIO2 according to the request
  
  client.flush();

  // Prepare the response
  String s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>\r\nGPIO is now ";
  s += (val)?"high \n":"low \n";
  s += " \r\n <div><a href= \"http://petruch0.ru/html/esp.html\">back</a></div>";
  s += "</html>\n";

  // Send the response to the client
  client.print(s);
  delay(1);
  Serial.println("Client disonnected");

  // The client will actually be disconnected 
  // when the function returns and 'client' object is detroyed
}

