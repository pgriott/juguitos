# Notas

# Whatsapp
Create your own link with a pre-filled message
The pre-filled message will automatically appear in the text field of a chat. Use https://wa.me/whatsappphonenumber?text=urlencodedtext where whatsappphonenumber is a full phone number in international format and urlencodedtext is the URL-encoded pre-filled message.
Example: https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale
To create a link with just a pre-filled message, use https://wa.me/?text=urlencodedtext
Example: https://wa.me/?text=I'm%20inquiring%20about%20the%20apartment%20listing
After clicking on the link, you’ll be shown a list of contacts you can send your message to.

Accesibility:
instead of a tag or link wrapping up the whole card, I deplaced it with a div.
card then h1 then link, then span (inside link) but span has an absolute class and the div has a relative class.