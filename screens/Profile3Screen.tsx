import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigators/RootNavigator"

type Profile3ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Profile3">

type Props = {
    navigation: Profile3ScreenNavigationProp
}

const { width, height } = Dimensions.get("window")

export default function Profile3Screen({ navigation }: Props) {
    const profileData = {
        name: "Alex Rodriguez",
        username: "@alexdev",
        bio: "Full-stack developer | Open source contributor | Tech blogger sharing knowledge about modern web development",
        followers: "8.7K",
        following: "2.1K",
        posts: "234",
        repositories: "67",
        contributions: "1.2K",
    }

    const techStack = [
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "TypeScript", level: 88 },
        { name: "GraphQL", level: 75 },
    ]

    const projects = [
        { name: "E-commerce Platform", tech: "React, Node.js", stars: "1.2K" },
        { name: "Task Manager App", tech: "React Native", stars: "856" },
        { name: "API Gateway", tech: "Node.js, Express", stars: "634" },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Profile Header */}
                    <View style={styles.profileHeader}>
                        <View style={styles.avatarContainer}>
                            <View style={[styles.avatar, { backgroundColor: "#10b981" }]}>
                                <Text style={styles.avatarText}>AR</Text>
                            </View>
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>🟢 Available</Text>
                            </View>
                        </View>
                        <Text style={styles.name}>{profileData.name}</Text>
                        <Text style={styles.username}>{profileData.username}</Text>
                        <Text style={styles.bio}>{profileData.bio}</Text>
                    </View>

                    {/* Developer Stats */}
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.repositories}</Text>
                            <Text style={styles.statLabel}>Repositories</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.contributions}</Text>
                            <Text style={styles.statLabel}>Contributions</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.followers}</Text>
                            <Text style={styles.statLabel}>Followers</Text>
                        </View>
                    </View>

                    {/* Tech Stack */}
                    <View style={styles.techStackContainer}>
                        <Text style={styles.sectionTitle}>Tech Stack</Text>
                        {techStack.map((tech, index) => (
                            <View key={index} style={styles.techItem}>
                                <View style={styles.techHeader}>
                                    <Text style={styles.techName}>{tech.name}</Text>
                                    <Text style={styles.techLevel}>{tech.level}%</Text>
                                </View>
                                <View style={styles.progressBar}>
                                    <View style={[styles.progressFill, { width: `${tech.level}%`, backgroundColor: "#10b981" }]} />
                                </View>
                            </View>
                        ))}
                    </View>

                    {/* Featured Projects */}
                    <View style={styles.projectsContainer}>
                        <Text style={styles.sectionTitle}>Featured Projects</Text>
                        {projects.map((project, index) => (
                            <View key={index} style={styles.projectCard}>
                                <View style={styles.projectHeader}>
                                    <Text style={styles.projectName}>{project.name}</Text>
                                    <Text style={styles.projectStars}>⭐ {project.stars}</Text>
                                </View>
                                <Text style={styles.projectTech}>{project.tech}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={[styles.followButton, { backgroundColor: "#10b981" }]}>
                            <Text style={styles.followButtonText}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.messageButton, { borderColor: "#10b981" }]}>
                            <Text style={[styles.messageButtonText, { color: "#10b981" }]}>GitHub</Text>
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
    profileHeader: {
        alignItems: "center",
        padding: 32,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    avatarContainer: {
        marginBottom: 16,
        position: "relative",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarText: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#ffffff",
    },
    statusBadge: {
        position: "absolute",
        bottom: -8,
        right: -8,
        backgroundColor: "#2a2a2a",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#181818",
    },
    statusText: {
        fontSize: 10,
        color: "#10b981",
        fontWeight: "600",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 4,
    },
    username: {
        fontSize: 16,
        color: "#10b981",
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
    techStackContainer: {
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
    techItem: {
        marginBottom: 16,
    },
    techHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    techName: {
        fontSize: 14,
        color: "#ffffff",
        fontWeight: "500",
    },
    techLevel: {
        fontSize: 12,
        color: "#10b981",
        fontWeight: "600",
    },
    progressBar: {
        height: 6,
        backgroundColor: "#2a2a2a",
        borderRadius: 3,
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        borderRadius: 3,
    },
    projectsContainer: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    projectCard: {
        backgroundColor: "#2a2a2a",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: "#10b981",
    },
    projectHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    projectName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffff",
    },
    projectStars: {
        fontSize: 12,
        color: "#fbbf24",
    },
    projectTech: {
        fontSize: 12,
        color: "#b3b3b3",
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
