import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigators/RootNavigator"

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Profile">

type Props = {
    navigation: ProfileScreenNavigationProp
}

const { width, height } = Dimensions.get("window")

export default function ProfileScreen({ navigation }: Props) {
    const profileData = {
        name: "John Doe",
        username: "@johndoe",
        bio: "React Native developer passionate about creating beautiful mobile experiences. Love to explore new technologies and share knowledge with the community.",
        followers: "2.5K",
        following: "892",
        posts: "156",
    }

    const menuItems = [
        { title: "Edit Profile", icon: "✏️" },
        { title: "Settings", icon: "⚙️" },
        { title: "Privacy", icon: "🔒" },
        { title: "Help & Support", icon: "❓" },
        { title: "About", icon: "ℹ️" },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Profile Header */}
                    <View style={styles.profileHeader}>
                        <View style={styles.avatarContainer}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>JD</Text>
                            </View>
                        </View>
                        <Text style={styles.name}>{profileData.name}</Text>
                        <Text style={styles.username}>{profileData.username}</Text>
                        <Text style={styles.bio}>{profileData.bio}</Text>
                    </View>

                    {/* Stats */}
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.posts}</Text>
                            <Text style={styles.statLabel}>Posts</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.followers}</Text>
                            <Text style={styles.statLabel}>Followers</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.following}</Text>
                            <Text style={styles.statLabel}>Following</Text>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.followButton}>
                            <Text style={styles.followButtonText}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.messageButton}>
                            <Text style={styles.messageButtonText}>Message</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Menu Items */}
                    <View style={styles.menuContainer}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.menuItem}>
                                <Text style={styles.menuIcon}>{item.icon}</Text>
                                <Text style={styles.menuTitle}>{item.title}</Text>
                                <Text style={styles.menuArrow}>›</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

                {/* Close Button */}
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: 20
    },
    modal: {
        width: 815,
        height: "100%",
        backgroundColor: "#181818",
        opacity: 1,
    },
    scrollContent: {
        paddingBottom: 80,
        flexGrow: 1,
    },
    profileHeader: {
        alignItems: "center",
        padding: 32,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    avatarContainer: {
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#6366f1",
        alignItems: "center",
        justifyContent: "center",
    },
    avatarText: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#ffffff",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 4,
    },
    username: {
        fontSize: 16,
        color: "#6366f1",
        marginBottom: 16,
    },
    bio: {
        fontSize: 14,
        color: "#b3b3b3",
        textAlign: "center",
        lineHeight: 20,
        paddingHorizontal: 20,
    },
    statsContainer: {
        flexDirection: "row",
        paddingVertical: 24,
        paddingHorizontal: 32,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    statItem: {
        flex: 1,
        alignItems: "center",
    },
    statDivider: {
        width: 1,
        backgroundColor: "#333333",
        marginHorizontal: 16,
    },
    statNumber: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        color: "#b3b3b3",
    },
    actionButtons: {
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 24,
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    followButton: {
        flex: 1,
        backgroundColor: "#6366f1",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    followButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
    messageButton: {
        flex: 1,
        backgroundColor: "transparent",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#6366f1",
    },
    messageButtonText: {
        color: "#6366f1",
        fontSize: 16,
        fontWeight: "600",
    },
    menuContainer: {
        paddingHorizontal: 32,
        paddingTop: 16,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    menuIcon: {
        fontSize: 20,
        marginRight: 16,
    },
    menuTitle: {
        flex: 1,
        fontSize: 16,
        color: "#ffffff",
    },
    menuArrow: {
        fontSize: 20,
        color: "#666666",
    },
    closeButton: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#2a2a2a",
        paddingVertical: 16,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#333333",
    },
    closeButtonText: {
        color: "#6366f1",
        fontSize: 16,
        fontWeight: "600",
    },
})
