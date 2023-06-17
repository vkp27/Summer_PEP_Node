/*What is a URL. Break it down into several parts that the url consists of. Use URL module to write a nodejs script to show the breakdown parts of a url as well.
*/
/*
A URL (Uniform Resource Locator) is a reference to a web resource that specifies its location on the internet. It is commonly used to access websites and webpages. A URL consists of several parts, including:

Protocol: The protocol specifies the rules or procedure for communication between the client and the server. Examples of protocols include HTTP (Hypertext Transfer Protocol), HTTPS (HTTP Secure), FTP (File Transfer Protocol), etc.

Host: The host is the domain name or IP address of the server where the resource is located. It identifies the server that will handle the request.

Port: The port number is an optional part of a URL that specifies a specific process or service on the host. It helps in identifying which application or service on the server should handle the request. The default port numbers are typically used if not specified explicitly (e.g., 80 for HTTP, 443 for HTTPS).

Path: The path represents the specific location or directory on the server where the resource is located. It provides the file or endpoint to access within the web server's file system or routing structure.

Query Parameters: Query parameters are optional parameters appended to the URL after a question mark (?). They are used to pass additional information to the server for processing. Query parameters are typically in the form of key-value pairs, separated by an ampersand (&).

Fragment Identifier: The fragment identifier, also known as the anchor or hash, is an optional part of a URL that points to a specific section or location within a webpage. It is indicated by a hash symbol (#) followed by the identifier.

 */

const url = require('url');

function breakdownURL(urlString) {
  const parsedUrl = new URL(urlString);

  console.log('Protocol:', parsedUrl.protocol);
  console.log('Host:', parsedUrl.host);
  console.log('Port:', parsedUrl.port);
  console.log('Path:', parsedUrl.pathname);
  console.log('Query Parameters:', parsedUrl.searchParams.toString());
  console.log('Fragment Identifier:', parsedUrl.hash);
}

breakdownURL('https://www.amazon.in/Red-Lemon-Titanium-Multifunctional-Waterproof/dp/B09ZYQH7C5/?_encoding=UTF8&pd_rd_w=7Do4f&content-id=amzn1.sym.82b4a24f-081c-4d15-959c-ef13a1d3fa4e&pf_rd_p=82b4a24f-081c-4d15-959c-ef13a1d3fa4e&pf_rd_r=BA62KT3KXZSC21MM45WK&pd_rd_wg=S1MLV&pd_rd_r=da66bcf0-cb22-4aef-896f-0cd58e705301&ref_=pd_gw_ci_mcx_mr_hp_atf_m');
