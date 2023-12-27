package com.chat.apis.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import java.util.HashSet;
import java.util.Set;


@Configuration
@EnableWebSocketMessageBroker
public class MessageConfig implements WebSocketMessageBrokerConfigurer {

    // private final Set<String> connectedUsers = new HashSet<>();
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/websocket").setAllowedOriginPatterns("*").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app");
        registry.enableSimpleBroker("/chatroom", "/user"); // set all destination prefixes
        registry.setUserDestinationPrefix("/user");
    }
/*
    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new UserTrackingChannelInterceptor());
    }

    private class UserTrackingChannelInterceptor implements ChannelInterceptor {
        @Override
        public Message<?> preSend(Message<?> message, MessageChannel channel) {
            StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);

            if (StompCommand.CONNECT.equals(accessor.getCommand())) {
                connectedUsers.add(accessor.getUser().getName());
            } else if (StompCommand.DISCONNECT.equals(accessor.getCommand())) {
                connectedUsers.remove(accessor.getUser().getName());
            }

            // You can broadcast the updated list of connected users to a specific topic
            // e.g., messagingTemplate.convertAndSend("/topic/connectedUsers", connectedUsers);

            return message;
        }
    }
    */
}
