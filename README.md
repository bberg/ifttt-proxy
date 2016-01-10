# ifttt-proxy
ifttt-proxy is a REST proxy for IFTTT Maker Channel triggers.  Using ifttt-proxy you can flexibly connect your IFTTT channels to most public APIs.

## IFTTT configuration
To use ifttt-proxy you need to set up two IFTTT recepies.  The *outbound recipie* will send an IFTTT Maker Channel trigger to ifttt-proxy with information about the API request for ifttt-proxy to send, and the conifguration of the inbound channel.  After receiving the response from the public API, ifttt-proxy will send a requet to IFTTT's maker channel triggering your *inbound recipie*.
### inbound recipie
1. Head to https://ifttt.com/maker and activate the Maker channel if it isn't already active
1. Copy the key from https://ifttt.com/maker where it says **Your key is:**

⋅⋅⋅ [get IFTTT maker key](/documentation/walkthrough/w0.png)

1. Create a new recipie

⋅⋅⋅ [create new recipie](/documentation/walkthrough/w1.png)

1. Select *Maker* Trigger Channel

⋅⋅⋅ [create new recipie](/documentation/walkthrough/w2.png)

1. Select *Receive a web request* Trigger

⋅⋅⋅ [receive a web request](/documentation/walkthrough/w3.png)

1. Name the event.  In this example we will get a stock quote so we'll use the event name *stock_quote*.

⋅⋅⋅ [name the event](/documentation/walkthrough/w4.png)

1. Select any Action Channel.  In this example we will use a simple *IF Notification* channel.  This is good for testing.

⋅⋅⋅ [select an action channel](/documentation/walkthrough/w5.png)

1. Select any Action.

⋅⋅⋅ [select an action](/documentation/walkthrough/w6.png)

1. Click on the beaker to use the Value1 Ingredient to return the output from ifttt-proxy.

... [click the beaker to add ingredients](/documentation/walkthrough/w7.png)

... [add the value1 ingredient](/documentation/walkthrough/w7b.png)



### outbound recipie


## flow
1. IFTTT Trigger 

![ifttt-proxy architecture overview](/documentation/arch-overview.png)
