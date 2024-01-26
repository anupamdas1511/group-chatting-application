package com.example.chatapp.ui.pages

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.chatapp.ui.theme.appBarBackground
import com.example.chatapp.ui.theme.contactBackground

@Composable
fun LoginPage(navController: NavController? = null) {
    val name = remember { mutableStateOf("") }
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = Modifier
            .fillMaxSize()
            .background(contactBackground)
            .padding(horizontal = 30.dp)
    ) {
        OutlinedTextField(
            value = name.value,
            onValueChange = { value: String ->
                name.value = value
            },
            colors = TextFieldDefaults.colors(
                unfocusedContainerColor = appBarBackground,
                focusedContainerColor = appBarBackground,
                focusedIndicatorColor = Color.Transparent,
                unfocusedIndicatorColor = Color.Transparent
            ),
            modifier = Modifier.fillMaxWidth()
        )
        Button(
            onClick = {
                navController?.navigate("home")
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(
                text = "Enter"
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun LoginPreview() {
    LoginPage()
}