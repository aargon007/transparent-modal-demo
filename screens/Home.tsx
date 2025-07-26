import type { StackNavigation } from "@/navigators/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

export default function HomeScreen() {
    const { navigate } = useNavigation<StackNavigation>();

    const features = [
        { title: "Navigation Demo", description: "Explore React Navigation features" },
        { title: "Dark Mode UI", description: "Beautiful dark theme interface" },
        { title: "Modal Screens", description: "Modal-style screen presentations" },
        { title: "Responsive Design", description: "Adaptive layouts for all devices" },
    ]

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <Text style={styles.heroTitle}>Welcome to React Navigation Demo</Text>
                    <Text style={styles.heroSubtitle}>Explore modern navigation patterns with beautiful dark mode design</Text>
                </View>

                {/* Action Button */}
                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => navigate("Profile")}
                >
                    <Text style={styles.primaryButtonText}>Open Profile</Text>
                </TouchableOpacity>

                {/* Features Grid */}
                <View style={styles.featuresContainer}>
                    <Text style={styles.sectionTitle}>Features</Text>
                    <View style={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <View key={index} style={styles.featureCard}>
                                <Text style={styles.featureTitle}>{feature.title}</Text>
                                <Text style={styles.featureDescription}>{feature.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Stats Section */}
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>100+</Text>
                        <Text style={styles.statLabel}>Components</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>50+</Text>
                        <Text style={styles.statLabel}>Screens</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>24/7</Text>
                        <Text style={styles.statLabel}>Support</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    scrollContent: {
        paddingBottom: 40,
    },
    heroSection: {
        padding: 24,
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 40,
    },
    heroTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        marginBottom: 12,
    },
    heroSubtitle: {
        fontSize: 16,
        color: "#b3b3b3",
        textAlign: "center",
        lineHeight: 24,
    },
    primaryButton: {
        backgroundColor: "#6366f1",
        marginHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 40,
        shadowColor: "#6366f1",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    primaryButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
    featuresContainer: {
        paddingHorizontal: 24,
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 20,
    },
    featuresGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    featureCard: {
        width: (width - 60) / 2,
        backgroundColor: "#1e1e1e",
        padding: 20,
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#333333",
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffff",
        marginBottom: 8,
    },
    featureDescription: {
        fontSize: 14,
        color: "#b3b3b3",
        lineHeight: 20,
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 24,
        paddingVertical: 32,
        backgroundColor: "#1e1e1e",
        marginHorizontal: 24,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#333333",
    },
    statItem: {
        alignItems: "center",
    },
    statNumber: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#6366f1",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 14,
        color: "#b3b3b3",
    },
})
