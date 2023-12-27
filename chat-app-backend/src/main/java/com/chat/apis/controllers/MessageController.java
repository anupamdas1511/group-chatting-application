package com.chat.apis.controllers;

import com.chat.apis.models.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message") // for group messages ------> sent to /app/message
    @SendTo("/chatroom/public")
    public Message receivePublicMessage(@Payload Message message) {
        // System.out.println(message.getContent());
        return message;
    }

    @MessageMapping("/private-message") // for personal messages ------> sent to /app/private-message
    public Message receivePrivateMessage(@Payload Message message) {
        // create a new topic before sending
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(), "/private", message); // listens to /user/{username}/private
        // System.out.println(message.getContent());
        return message;
    }

}
