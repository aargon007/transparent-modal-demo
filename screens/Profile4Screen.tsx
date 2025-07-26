import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigators/RootNavigator"

type Profile4ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Profile4">

type Props = {
    navigation: Profile4ScreenNavigationProp
}

const { width, height } = Dimensions.get("window")

export default function Profile4Screen({ navigation }: Props) {
    const profileData = {
        name: "Emma Wilson",
        username: "@emmawilson",
        bio: "Content Creator & Influencer 📸 Lifestyle • Fashion • Travel ✈️ Sharing my journey around the world 🌍",
        followers: "125K",
        following: "892",
        posts: "1.2K",
        likes: "2.5M",
        engagement: "8.5%",
    }

    const socialStats = [
        { platform: "Instagram", followers: "125K", icon: "📷" },
        { platform: "TikTok", followers: "89K", icon: "🎵" },
        { platform: "YouTube", followers: "45K", icon: "📺" },
        { platform: "Twitter", followers: "32K", icon: "🐦" },
    ]

    const recentPosts = [
        { title: "Paris Fashion Week", likes: "12.5K", comments: "234" },
        { title: "Morning Routine", likes: "8.9K", comments: "156" },
        { title: "Travel Essentials", likes: "15.2K", comments: "298" },
        { title: "Skincare Tips", likes: "11.7K", comments: "187" },
    ]

    const categories = ["Fashion", "Lifestyle", "Travel", "Beauty", "Wellness", "Photography"]

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Profile Header with Gradient */}
                    <View style={styles.headerGradient}>
                        <View style={styles.profileHeader}>
                            <View style={styles.avatarContainer}>
                                <View style={[styles.avatar, { backgroundColor: "#f59e0b" }]}>
                                    <Text style={styles.avatarText}>EW</Text>
                                </View>
                                <View style={styles.verifiedBadge}>
                                    <Text style={styles.verifiedText}>✓</Text>
                                </View>
                            </View>
                            <Text style={styles.name}>{profileData.name}</Text>
                            <Text style={styles.username}>{profileData.username}</Text>
                            <Text style={styles.bio}>{profileData.bio}</Text>
                        </View>
                    </View>

                    {/* Main Stats */}
                    <View style={styles.mainStatsContainer}>
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
                            <Text style={styles.statNumber}>{profileData.likes}</Text>
                            <Text style={styles.statLabel}>Total Likes</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.engagement}</Text>
                            <Text style={styles.statLabel}>Engagement</Text>
                        </View>
                    </View>

                    {/* Social Platforms */}
                    <View style={styles.socialContainer}>
                        <Text style={styles.sectionTitle}>Social Platforms</Text>
                        <View style={styles.socialGrid}>
                            {socialStats.map((social, index) => (
                                <View key={index} style={styles.socialCard}>
                                    <Text style={styles.socialIcon}>{social.icon}</Text>
                                    <Text style={styles.socialPlatform}>{social.platform}</Text>
                                    <Text style={styles.socialFollowers}>{social.followers}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Categories */}
                    <View style={styles.categoriesContainer}>
                        <Text style={styles.sectionTitle}>Content Categories</Text>
                        <View style={styles.categoriesGrid}>
                            {categories.map((category, index) => (
                                <View key={index} style={styles.categoryTag}>
                                    <Text style={styles.categoryText}>{category}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Recent Posts */}
                    <View style={styles.postsContainer}>
                        <Text style={styles.sectionTitle}>Recent Posts</Text>
                        {recentPosts.map((post, index) => (
                            <View key={index} style={styles.postCard}>
                                <View style={styles.postHeader}>
                                    <Text style={styles.postTitle}>{post.title}</Text>
                                    <View style={styles.postStats}>
                                        <Text style={styles.postStat}>❤️ {post.likes}</Text>
                                        <Text style={styles.postStat}>💬 {post.comments}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={[styles.followButton, { backgroundColor: "#f59e0b" }]}>
                            <Text style={styles.followButtonText}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.messageButton, { borderColor: "#f59e0b" }]}>
                            <Text style={[styles.messageButtonText, { color: "#f59e0b" }]}>Collaborate</Text>
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
    headerGradient: {
        backgroundColor: "#f59e0b",
        paddingBottom: 32,
    },
    profileHeader: {
        alignItems: "center",
        padding: 32,
        paddingBottom: 0,
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
        borderWidth: 4,
        borderColor: "#ffffff",
    },
    avatarText: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#ffffff",
    },
    verifiedBadge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 28,
        height: 28,
        backgroundColor: "#3b82f6",
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: "#ffffff",
    },
    verifiedText: {
        fontSize: 14,
        color: "#ffffff",
        fontWeight: "bold",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 4,
    },
    username: {
        fontSize: 16,
        color: "#ffffff",
        opacity: 0.9,
        marginBottom: 16,
    },
    bio: {
        fontSize: 14,
        color: "#ffffff",
        textAlign: "center",
        lineHeight: 20,
        paddingHorizontal: 20,
        opacity: 0.9,
    },
    mainStatsContainer: {
        flexDirection: "row",
        paddingVertical: 24,
        paddingHorizontal: 32,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        backgroundColor: "#1a1a1a",
    },
    statItem: {
        flex: 1,
        alignItems: "center",
    },
    statDivider: {
        width: 1,
        backgroundColor: "#333333",
        marginHorizontal: 8,
    },
    statNumber: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 11,
        color: "#b3b3b3",
    },
    socialContainer: {
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
    socialGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    socialCard: {
        backgroundColor: "#2a2a2a",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        width: (815 - 64 - 36) / 4,
        borderWidth: 1,
        borderColor: "#f59e0b",
    },
    socialIcon: {
        fontSize: 24,
        marginBottom: 8,
    },
    socialPlatform: {
        fontSize: 12,
        color: "#ffffff",
        fontWeight: "600",
        marginBottom: 4,
    },
    socialFollowers: {
        fontSize: 14,
        color: "#f59e0b",
        fontWeight: "bold",
    },
    categoriesContainer: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    categoriesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    categoryTag: {
        backgroundColor: "#2a2a2a",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#f59e0b",
    },
    categoryText: {
        fontSize: 12,
        color: "#f59e0b",
        fontWeight: "500",
    },
    postsContainer: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    postCard: {
        backgroundColor: "#2a2a2a",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    postHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    postTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffff",
        flex: 1,
    },
    postStats: {
        flexDirection: "row",
        gap: 12,
    },
    postStat: {
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
