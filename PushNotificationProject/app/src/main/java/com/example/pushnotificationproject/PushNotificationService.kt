package com.example.pushnotificationproject

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.getSystemService
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class PushNotificationService : FirebaseMessagingService() {
    override fun onMessageReceived(p0: RemoteMessage) {
        var tittle = p0.notification?.title
        var description = p0.notification?.body
        var CHANNEL_ID = "HEADS_UP_NOTIFICATION"

        var channel = NotificationChannel(
            CHANNEL_ID,
            "Heads up Notification",
            NotificationManager.IMPORTANCE_HIGH
        )
        getSystemService(NotificationManager::class.java).createNotificationChannel(channel)
        var notification = Notification.Builder(this, CHANNEL_ID)
            .setContentTitle(tittle)
            .setContentText(description)
            .setSmallIcon(R.drawable.firebase_icon)
            .setAutoCancel(true)

        NotificationManagerCompat.from(this).notify(1, notification.build())
        super.onMessageReceived(p0)
    }
}