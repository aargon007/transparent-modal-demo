import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigators/RootNavigator"

type Profile5ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Profile5">

type Props = {
    navigation: Profile5ScreenNavigationProp
}

const { width, height } = Dimensions.get("window")

export default function Profile5Screen({ navigation }: Props) {
    const profileData = {
        name: "Dr. Michael Chen",
        username: "@drchen",
        bio: "Cardiologist & Medical Researcher 🩺 Harvard Medical School • 15+ years experience • Passionate about preventive care",
        patients: "2.5K+",
        experience: "15 yrs",
        publications: "47",
        rating: "4.9",
        specialization: "Cardiology",
    }

    const credentials = [
        { title: "MD", institution: "Harvard Medical School", year: "2008" },
        { title: "Residency", institution: "Johns Hopkins Hospital", year: "2012" },
        { title: "Fellowship", institution: "Mayo Clinic", year: "2014" },
        { title: "Board Certified", institution: "American Board of Internal Medicine", year: "2015" },
    ]

    const services = [
        { name: "Cardiac Consultation", duration: "60 min", price: "$250" },
        { name: "ECG Analysis", duration: "30 min", price: "$150" },
        { name: "Stress Test", duration: "90 min", price: "$400" },
        { name: "Follow-up Visit", duration: "30 min", price: "$180" },
    ]

    const availability = [
        { day: "Monday", time: "9:00 AM - 5:00 PM" },
        { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
        { day: "Wednesday", time: "9:00 AM - 3:00 PM" },
        { day: "Thursday", time: "9:00 AM - 5:00 PM" },
        { day: "Friday", time: "9:00 AM - 4:00 PM" },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Professional Header */}
                    <View style={styles.professionalHeader}>
                        <View style={styles.profileHeader}>
                            <View style={styles.avatarContainer}>
                                <View style={[styles.avatar, { backgroundColor: "#0ea5e9" }]}>
                                    <Text style={styles.avatarText}>MC</Text>
                                </View>
                                <View style={styles.professionalBadge}>
                                    <Text style={styles.badgeText}>MD</Text>
                                </View>
                            </View>
                            <Text style={styles.name}>{profileData.name}</Text>
                            <Text style={styles.specialization}>{profileData.specialization}</Text>
                            <Text style={styles.bio}>{profileData.bio}</Text>

                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>⭐ {profileData.rating}</Text>
                                <Text style={styles.ratingText}>({profileData.patients} patients)</Text>
                            </View>
                        </View>
                    </View>

                    {/* Professional Stats */}
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.experience}</Text>
                            <Text style={styles.statLabel}>Experience</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.patients}</Text>
                            <Text style={styles.statLabel}>Patients</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{profileData.publications}</Text>
                            <Text style={styles.statLabel}>Publications</Text>
                        </View>
                    </View>

                    {/* Credentials */}
                    <View style={styles.credentialsContainer}>
                        <Text style={styles.sectionTitle}>Education & Credentials</Text>
                        {credentials.map((credential, index) => (
                            <View key={index} style={styles.credentialItem}>
                                <View style={styles.credentialHeader}>
                                    <Text style={styles.credentialTitle}>{credential.title}</Text>
                                    <Text style={styles.credentialYear}>{credential.year}</Text>
                                </View>
                                <Text style={styles.credentialInstitution}>{credential.institution}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Services */}
                    <View style={styles.servicesContainer}>
                        <Text style={styles.sectionTitle}>Services & Pricing</Text>
                        {services.map((service, index) => (
                            <View key={index} style={styles.serviceCard}>
                                <View style={styles.serviceHeader}>
                                    <Text style={styles.serviceName}>{service.name}</Text>
                                    <Text style={styles.servicePrice}>{service.price}</Text>
                                </View>
                                <Text style={styles.serviceDuration}>Duration: {service.duration}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Availability */}
                    <View style={styles.availabilityContainer}>
                        <Text style={styles.sectionTitle}>Availability</Text>
                        {availability.map((slot, index) => (
                            <View key={index} style={styles.availabilityItem}>
                                <Text style={styles.availabilityDay}>{slot.day}</Text>
                                <Text style={styles.availabilityTime}>{slot.time}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={[styles.appointmentButton, { backgroundColor: "#0ea5e9" }]}>
                            <Text style={styles.appointmentButtonText}>Book Appointment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.consultButton, { borderColor: "#0ea5e9" }]}>
                            <Text style={[styles.consultButtonText, { color: "#0ea5e9" }]}>Consult Now</Text>
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
    professionalHeader: {
        backgroundColor: "#0ea5e9",
        paddingBottom: 24,
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
    professionalBadge: {
        position: "absolute",
        bottom: -8,
        right: -8,
        backgroundColor: "#dc2626",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#ffffff",
    },
    badgeText: {
        fontSize: 12,
        color: "#ffffff",
        fontWeight: "bold",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 4,
    },
    specialization: {
        fontSize: 16,
        color: "#ffffff",
        opacity: 0.9,
        marginBottom: 16,
        fontWeight: "600",
    },
    bio: {
        fontSize: 14,
        color: "#ffffff",
        textAlign: "center",
        lineHeight: 20,
        paddingHorizontal: 20,
        opacity: 0.9,
        marginBottom: 16,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    rating: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold",
    },
    ratingText: {
        fontSize: 12,
        color: "#ffffff",
        opacity: 0.8,
    },
    statsContainer: {
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
    credentialsContainer: {
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
    credentialItem: {
        backgroundColor: "#2a2a2a",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: "#0ea5e9",
    },
    credentialHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },
    credentialTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffff",
    },
    credentialYear: {
        fontSize: 12,
        color: "#0ea5e9",
        fontWeight: "600",
    },
    credentialInstitution: {
        fontSize: 14,
        color: "#b3b3b3",
    },
    servicesContainer: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    serviceCard: {
        backgroundColor: "#2a2a2a",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    serviceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffff",
    },
    servicePrice: {
        fontSize: 16,
        color: "#10b981",
        fontWeight: "bold",
    },
    serviceDuration: {
        fontSize: 12,
        color: "#b3b3b3",
    },
    availabilityContainer: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    availabilityItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    availabilityDay: {
        fontSize: 14,
        color: "#ffffff",
        fontWeight: "500",
    },
    availabilityTime: {
        fontSize: 14,
        color: "#0ea5e9",
    },
    actionButtons: {
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 24,
        gap: 12,
    },
    appointmentButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    appointmentButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
    consultButton: {
        flex: 1,
        backgroundColor: "transparent",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 1,
    },
    consultButtonText: {
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
