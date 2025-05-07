# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Explore Pt 3

### Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

You would not use unit testing to test a message feature. This is because unit tests do not test how individual components interact with eachother. When it comes down to user messaging there is more to it than just "send message" you would have to additionally test input validation, network logistics, and message receiving, etc.

### Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

You would be able to utilize a unit test for a "max message length" feature due to the fact that this would be one single component of the messaging feature. Since in this case we are debugging on a small scale without many moving parts, a simple unit test would suffice.
