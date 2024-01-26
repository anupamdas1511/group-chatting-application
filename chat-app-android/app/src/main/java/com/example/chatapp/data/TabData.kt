package com.example.chatapp.data

data class TabData(
    val title: String,
    val unreadCount: Int?
)

val tabs = listOf(
    TabData(title = Tabs.CHATS.value, unreadCount = 16),
    TabData(title = Tabs.STATUS.value, unreadCount = null),
    TabData(title = Tabs.CALLS.value, unreadCount = null),
)

enum class Tabs(val value: String) {
    CHATS("chats"),
    STATUS("status"),
    CALLS("calls")
}
