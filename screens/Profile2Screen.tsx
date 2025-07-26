import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigators/RootNavigator"

type Profile2ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Profile2">

type Props = {
    navigation: Profile2ScreenNavigationProp
}

const { width, height } = Dimensions.get("window")

export default function Profile2Screen({ navigation }: Props) {
    const profileData = {
        name: "Sarah Chen",
        username: "@sarahchen",
        bio: "UI/UX Designer crafting beautiful digital experiences. Coffee enthusiast ☕ and travel lover 🌍",
        followers: "5.2K",
        following: "1.2K",
        posts: "89",
        location: "San Francisco, CA",
        website: "sarahchen.design",
    }

    const skills = ["UI Design", "UX Research", "Figma", "Sketch", "Prototyping", "User Testing"]

    const achievements = [
        { title: "Top Designer", count: "2023" },
        { title: "Projects", count: "150+" },
        { title: "Awards", count: "12" },
        { title: "Years Exp", count: "8" },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Cover Photo */}
                    <View style={styles.coverPhoto}>
                        <View style={styles.gradient} />
                    </View>

                    {/* Profile Header */}
                    <View style={styles.profileHeader}>
                        <View style={styles.avatarContainer}>
                            <View style={[styles.avatar, { backgroundColor: "#ec4899" }]}>
                                <Text style={styles.avatarText}>SC</Text>
                            </View>
                        </View>
                        <Text style={styles.name}>{profileData.name}</Text>
                        <Text style={styles.username}>{profileData.username}</Text>
                        <Text style={styles.bio}>{profileData.bio}</Text>

                        <View style={styles.locationContainer}>
                            <Text style={styles.locationText}>📍 {profileData.location}</Text>
                            <Text style={styles.websiteText}>🌐 {profileData.website}</Text>
                        </View>
                    </View>

                    {/* Achievements */}
                    <View style={styles.achievementsContainer}>
                        {achievements.map((achievement, index) => (
                            <View key={index} style={styles.achievementItem}>
                                <Text style={styles.achievementCount}>{achievement.count}</Text>
                                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Skills */}
                    <View style={styles.skillsContainer}>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        <View style={styles.skillsGrid}>
                            {skills.map((skill, index) => (
                                <View key={index} style={styles.skillTag}>
                                    <Text style={styles.skillText}>{skill}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={[styles.followButton, { backgroundColor: "#ec4899" }]}>
                            <Text style={styles.followButtonText}>Connect</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.messageButton, { borderColor: "#ec4899" }]}>
                            <Text style={[styles.messageButtonText, { color: "#ec4899" }]}>Portfolio</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* Close Button */}
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
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
        paddingTop: 20,
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
    coverPhoto: {
        height: 120,
        backgroundColor: "#ec4899",
        position: "relative",
    },
    gradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(236, 72, 153, 0.8)",
    },
    profileHeader: {
        alignItems: "center",
        padding: 32,
        marginTop: -50,
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
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "#181818",
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
        color: "#ec4899",
        marginBottom: 16,
    },
    bio: {
        fontSize: 14,
        color: "#b3b3b3",
        textAlign: "center",
        lineHeight: 20,
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    locationContainer: {
        alignItems: "center",
        gap: 4,
    },
    locationText: {
        fontSize: 12,
        color: "#b3b3b3",
    },
    websiteText: {
        fontSize: 12,
        color: "#ec4899",
    },
    achievementsContainer: {
        flexDirection: "row",
        paddingVertical: 24,
        paddingHorizontal: 32,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        justifyContent: "space-around",
    },
    achievementItem: {
        alignItems: "center",
    },
    achievementCount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ec4899",
        marginBottom: 4,
    },
    achievementTitle: {
        fontSize: 12,
        color: "#b3b3b3",
    },
    skillsContainer: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 16,
    },
    skillsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    skillTag: {
        backgroundColor: "#2a2a2a",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#ec4899",
    },
    skillText: {
        fontSize: 12,
        color: "#ec4899",
        fontWeight: "500",
    },
    actionButtons: {
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 24,
        gap: 12,
    },
    followButton: {
        flex: 1,
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
    },
    messageButtonText: {
        fontSize: 16,
        fontWeight: "600",
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
