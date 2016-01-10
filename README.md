# ifttt-proxy
ifttt-proxy is a REST proxy for IFTTT Maker Channel triggers.  Using ifttt-proxy you can flexibly connect your IFTTT channels to most public APIs.

## IFTTT configuration
To use ifttt-proxy you need to set up two IFTTT recepies.  The *outbound recipie* will send an IFTTT Maker Channel trigger to ifttt-proxy with information about the API request for ifttt-proxy to send, and the conifguration of the inbound channel.  After receiving the response from the public API, ifttt-proxy will send a requet to IFTTT's maker channel triggering your *inbound recipie*.



## flow
1. IFTTT Trigger 
<img src="/documentation/arch-overview.png" alt="ifttt-proxy architecture overview" width="800px">


### inbound recipie
1. Head to https://ifttt.com/maker and activate the Maker channel if it isn't already active
1. Copy the key from https://ifttt.com/maker where it says **Your key is:**
  * <img src="/documentation/walkthrough/w0.png" alt="get IFTTT maker key" width="400px">
1. Create a new recipie
  * <img src="/documentation/walkthrough/w1.png" alt="create new recipie" width="400px">
1. Select *Maker* Trigger Channel
  * <img src="/documentation/walkthrough/w2.png" alt="select maker channel" width="400px">
1. Select *Receive a web request* Trigger
  * <img src="/documentation/walkthrough/w3.png" alt="receive a web request" width="400px">
1. Name the event.  In this example we will get a stock quote so we'll use the event name *stock_quote*.
  * <img src="/documentation/walkthrough/w4.png" alt="name the event" width="400px">
1. Select any Action Channel.  In this example we will use a simple *IF Notification* channel.  This is good for testing.
  * <img src="/documentation/walkthrough/w5.png" alt="name the event" width="400px">
1. Select any Action.
  * <img src="/documentation/walkthrough/w6.png" alt="select any action" width="400px">
1. Click on the beaker to use the Value1 Ingredient to return the output from ifttt-proxy.
  * <img src="/documentation/walkthrough/w7.png" alt="click the beaker to add ingredients" width="400px">
  * <img src="/documentation/walkthrough/w7b.png" alt="add the value1 ingredient" width="400px">



### outbound recipie
1. Create a new recipie
  * <img src="/documentation/walkthrough/w1.png" alt="create new recipie" width="400px">
1. Select any Trigger Channel
1. Select the *Maker* Action Channel
  1. For **URL** enter **http://ifttt-relay.ben-berg.com/api/v1/**
  2. For **Method** select **POST**
  3. For **Content Type** select **application/json**
  4. For **Body** write a JSON object similar to the one below
   - ifttt_key is your Maker Key
   - event is the inbound recipie event
   - proxyRequest defines the paramaters of the proxied API request
   - parser defines what parts of the returned proxy request to send to the inbound request
  ```
  { 
   "ifttt_key":"UHGn54WbT1zbxipLfWF8h", 
   "event":"stock_quote", 
   "proxyRequest": { 
    "host":"query.yahooapis.com", 
    "path":"/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22ALRM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json", 
    "headers":{}, 
    "method":"GET" 
    }, 
   "parser":[
    ["query","results","quote","symbol"],
    ["query","results","quote","LastTradePriceOnly"]
   ]
  }
  ```
