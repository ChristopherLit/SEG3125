"use client"

import { useState } from "react"

// Custom Icons as SVG components
const CarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
)

const SteeringWheelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
)

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

// Main App Component
export default function DriveAcademy() {
  const [currentPage, setCurrentPage] = useState("landing")
  const [selectedService, setSelectedService] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedInstructor, setSelectedInstructor] = useState(null)

  const services = [
    {
      id: 1,
      name: "Beginner Lesson",
      price: 45,
      duration: "60 minutes",
      description: "Perfect for first-time drivers",
    },
    {
      id: 2,
      name: "Highway Driving",
      price: 55,
      duration: "90 minutes",
      description: "Master highway and freeway driving",
    },
    {
      id: 3,
      name: "Test Prep",
      price: 65,
      duration: "120 minutes",
      description: "Prepare for your driving test",
    },
    {
      id: 4,
      name: "Parallel Parking",
      price: 40,
      duration: "45 minutes",
      description: "Master parallel parking techniques",
    },
    {
      id: 5,
      name: "Aidan Special",
      price: 75,
      duration: "90 minutes",
      description: "Premium personalized driving experience",
    },
  ]

  const instructors = [
    { id: 1, name: "Sarah Johnson", vehicle: "automatic" },
    { id: 2, name: "Mike Chen", vehicle: "manual" },
    { id: 3, name: "Emma Davis", vehicle: "automatic" },
    { id: 4, name: "Alex Rodriguez", vehicle: "manual" },
  ]

  // Navigation Component
  const Navigation = () => (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>
          <CarIcon />
          <span style={styles.logoText}>Drive Academy</span>
        </div>
        <div style={styles.navLinks}>
          <button
            style={currentPage === "landing" ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink}
            onClick={() => setCurrentPage("landing")}
          >
            Home
          </button>
          <button
            style={currentPage === "services" ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink}
            onClick={() => setCurrentPage("services")}
          >
            Services
          </button>
          <button
            style={currentPage === "calendar" ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink}
            onClick={() => setCurrentPage("calendar")}
          >
            Schedule
          </button>
          <button
            style={currentPage === "contact" ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink}
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )

  // Landing Page Component
  const LandingPage = ({ setCurrentPage }) => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <div style={styles.heroContent}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Drive Academy</h1>
          <p style={styles.heroSlogan}>Your road to confidence starts here.</p>
          <p style={styles.heroDescription}>
            Professional driving instruction with experienced instructors. Learn to drive safely and confidently with
            our comprehensive lessons.
          </p>
          <button style={styles.ctaButton} onClick={() => setCurrentPage("services")}>
            Book a Lesson
          </button>
        </div>

        <div style={styles.heroImage}>
          <div
            style={{
              width: "300px",
              height: "200px",
              position: "relative",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
          <img src="/car.png" alt="Car" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

          </div>
        </div>
      </div>
    </div>

    <div style={styles.features}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Why Choose Drive Academy?</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <SteeringWheelIcon />
            <h3>Expert Instructors</h3>
            <p>Certified professionals with years of experience</p>
          </div>
          <div style={styles.featureCard}>
            <CalendarIcon />
            <h3>Flexible Scheduling</h3>
            <p>Book lessons at times that work for you</p>
          </div>
          <div style={styles.featureCard}>
            <CheckIcon />
            <h3>High Pass Rate</h3>
            <p>95% of our students pass on their first try</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


  // Service Selection Page
  const ServiceSelectionPage = () => (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.pageTitle}>Choose Your Lesson Type</h1>
        <div style={styles.serviceGrid}>
          {services.map((service) => (
            <div
              key={service.id}
              style={
                selectedService?.id === service.id
                  ? { ...styles.serviceCard, ...styles.serviceCardSelected }
                  : styles.serviceCard
              }
              onClick={() => setSelectedService(service)}
            >
              <h3 style={styles.serviceName}>{service.name}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              <div style={styles.serviceDetails}>
                <span style={styles.servicePrice}>${service.price}</span>
                <span style={styles.serviceDuration}>{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
        {selectedService && (
          <div style={styles.nextButtonContainer}>
            <button style={styles.nextButton} onClick={() => setCurrentPage("reservation")}>
              Continue to Booking
            </button>
          </div>
        )}
      </div>
    </div>
  )

  // Reservation Access Page
  const ReservationAccessPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
    })

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setUserInfo(formData)
      setCurrentPage("calendar")
    }

    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Your Information</h1>
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <button type="submit" style={styles.submitButton}>
                Continue to Calendar
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // Calendar Page
  const CalendarPage = () => {
    const [selectedVehicleType, setSelectedVehicleType] = useState("automatic")

    const availableTimes = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
    const availableDates = [
      "2024-01-15",
      "2024-01-16",
      "2024-01-17",
      "2024-01-18",
      "2024-01-19",
      "2024-01-22",
      "2024-01-23",
      "2024-01-24",
      "2024-01-25",
      "2024-01-26",
    ]

    const filteredInstructors = instructors.filter((instructor) => instructor.vehicle === selectedVehicleType)

    const handleDateSelect = (date) => {
      setSelectedDate(date)
      setSelectedTime(null)
      setSelectedInstructor(null)
    }

    const handleTimeSelect = (time) => {
      setSelectedTime(time)
      setSelectedInstructor(null)
    }

    const handleInstructorSelect = (instructor) => {
      setSelectedInstructor(instructor)
    }

    const canProceed = selectedDate && selectedTime && selectedInstructor

    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Select Date & Time</h1>

          <div style={styles.filterSection}>
            <label style={styles.label}>Vehicle Type:</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  value="automatic"
                  checked={selectedVehicleType === "automatic"}
                  onChange={(e) => setSelectedVehicleType(e.target.value)}
                  style={styles.radio}
                />
                Automatic
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  value="manual"
                  checked={selectedVehicleType === "manual"}
                  onChange={(e) => setSelectedVehicleType(e.target.value)}
                  style={styles.radio}
                />
                Manual
              </label>
            </div>
          </div>

          <div style={styles.calendarSection}>
            <h3 style={styles.sectionSubtitle}>Available Dates</h3>
            <div style={styles.dateGrid}>
              {availableDates.map((date) => (
                <button
                  key={date}
                  style={
                    selectedDate === date ? { ...styles.dateButton, ...styles.dateButtonSelected } : styles.dateButton
                  }
                  onClick={() => handleDateSelect(date)}
                >
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </button>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div style={styles.timeSection}>
              <h3 style={styles.sectionSubtitle}>Available Times</h3>
              <div style={styles.timeGrid}>
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    style={
                      selectedTime === time ? { ...styles.timeButton, ...styles.timeButtonSelected } : styles.timeButton
                    }
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedTime && (
            <div style={styles.instructorSection}>
              <h3 style={styles.sectionSubtitle}>Choose Instructor</h3>
              <div style={styles.instructorGrid}>
                {filteredInstructors.map((instructor) => (
                  <button
                    key={instructor.id}
                    style={
                      selectedInstructor?.id === instructor.id
                        ? { ...styles.instructorButton, ...styles.instructorButtonSelected }
                        : styles.instructorButton
                    }
                    onClick={() => handleInstructorSelect(instructor)}
                  >
                    <UserIcon />
                    <span>{instructor.name}</span>
                    <small>({instructor.vehicle})</small>
                  </button>
                ))}
              </div>
            </div>
          )}

          {canProceed && (
            <div style={styles.nextButtonContainer}>
              <button style={styles.nextButton} onClick={() => setCurrentPage("confirmation")}>
                Review Booking
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Booking Confirmation Page
  const BookingConfirmationPage = () => {
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleConfirm = () => {
      setIsConfirmed(true)
    }

    if (isConfirmed) {
      return (
        <div style={styles.page}>
          <div style={styles.container}>
            <div style={styles.confirmationSuccess}>
              <CheckIcon />
              <h1 style={styles.successTitle}>Booking Confirmed!</h1>
              <p style={styles.successMessage}>
                Your driving lesson has been successfully booked. You will receive a confirmation email shortly.
              </p>
              <div style={styles.supportInfo}>
                <h3>Need Help?</h3>
                <p>Contact us: (555) 123-4567</p>
                <p>Email: support@driveacademy.com</p>
                <p>Address: 123 Driving Lane, City, State 12345</p>
              </div>
              <button
                style={styles.homeButton}
                onClick={() => {
                  setCurrentPage("landing")
                  setSelectedService(null)
                  setUserInfo(null)
                  setSelectedDate(null)
                  setSelectedTime(null)
                  setSelectedInstructor(null)
                  setIsConfirmed(false)
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Confirm Your Booking</h1>
          <div style={styles.confirmationCard}>
            <h2 style={styles.confirmationTitle}>Booking Summary</h2>

            <div style={styles.summarySection}>
              <h3>Service</h3>
              <p>{selectedService?.name}</p>
              <p>{selectedService?.description}</p>
              <p>
                <strong>
                  ${selectedService?.price} - {selectedService?.duration}
                </strong>
              </p>
            </div>

            <div style={styles.summarySection}>
              <h3>Student Information</h3>
              <p>
                <strong>Name:</strong> {userInfo?.name}
              </p>
              <p>
                <strong>Phone:</strong> {userInfo?.phone}
              </p>
              <p>
                <strong>Email:</strong> {userInfo?.email}
              </p>
            </div>

            <div style={styles.summarySection}>
              <h3>Lesson Details</h3>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                <strong>Time:</strong> {selectedTime}
              </p>
              <p>
                <strong>Instructor:</strong> {selectedInstructor?.name}
              </p>
              <p>
                <strong>Vehicle:</strong> {selectedInstructor?.vehicle}
              </p>
            </div>

            <div style={styles.totalSection}>
              <h3>Total: ${selectedService?.price}</h3>
            </div>

            <button style={styles.confirmButton} onClick={handleConfirm}>
              Confirm and Pay
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Contact Page (simple)
  const ContactPage = () => (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.pageTitle}>Contact Us</h1>
        <div style={styles.contactInfo}>
          <div style={styles.contactCard}>
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div style={styles.contactCard}>
            <h3>Email</h3>
            <p>info@driveacademy.com</p>
          </div>
          <div style={styles.contactCard}>
            <h3>Address</h3>
            <p>
              123 Driving Lane
              <br />
              City, State 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage />
      case "services":
        return <ServiceSelectionPage />
      case "reservation":
        return <ReservationAccessPage />
      case "calendar":
        return <CalendarPage />
      case "confirmation":
        return <BookingConfirmationPage />
      case "contact":
        return <ContactPage />
      default:
        return <LandingPage />
    }
  }

  return (
    <div style={styles.app}>
      <Navigation />
      {renderCurrentPage()}
    </div>
  )
}

// Styles object
const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
  },
  nav: {
    backgroundColor: "#1e293b",
    color: "white",
    padding: "1rem 0",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  logoText: {
    color: "#3b82f6",
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    transition: "background-color 0.2s",
  },
  navLinkActive: {
    backgroundColor: "#3b82f6",
  },
  page: {
    minHeight: "calc(100vh - 80px)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  hero: {
    backgroundColor: "#1e293b",
    color: "white",
    padding: "4rem 0",
  },
  heroContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  heroText: {
    textAlign: "left",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#3b82f6",
  },
  heroSlogan: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#94a3b8",
  },
  heroDescription: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },
  ctaButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.2s",
  },
  heroImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  driverIcon: {
    position: "absolute",
    top: "10px",
    right: "20px",
    fontSize: "2rem",
    color: "#fbbf24",
  },
  features: {
    padding: "4rem 0",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "3rem",
    color: "#1e293b",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  featureCard: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "1rem",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: "#3b82f6",
  },
  pageTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "3rem",
    color: "#1e293b",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem",
  },
  serviceCard: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "1rem",
    cursor: "pointer",
    border: "2px solid #e2e8f0",
    transition: "all 0.2s",
  },
  serviceCardSelected: {
    borderColor: "#3b82f6",
    backgroundColor: "#eff6ff",
  },
  serviceName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#1e293b",
  },
  serviceDescription: {
    color: "#64748b",
    marginBottom: "1rem",
  },
  serviceDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servicePrice: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#3b82f6",
  },
  serviceDuration: {
    color: "#64748b",
  },
  nextButtonContainer: {
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  formContainer: {
    maxWidth: "500px",
    margin: "0 auto",
  },
  form: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    color: "#1e293b",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    border: "2px solid #e2e8f0",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "1rem",
    fontSize: "1.1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  filterSection: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "1rem",
    marginBottom: "2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  radioGroup: {
    display: "flex",
    gap: "2rem",
    marginTop: "0.5rem",
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
  },
  radio: {
    margin: 0,
  },
  calendarSection: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "1rem",
    marginBottom: "2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  sectionSubtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#1e293b",
  },
  dateGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "1rem",
  },
  dateButton: {
    padding: "1rem",
    border: "2px solid #e2e8f0",
    borderRadius: "0.5rem",
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.2s",
  },
  dateButtonSelected: {
    borderColor: "#3b82f6",
    backgroundColor: "#eff6ff",
    color: "#3b82f6",
  },
  timeSection: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "1rem",
    marginBottom: "2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  timeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "1rem",
  },
  timeButton: {
    padding: "1rem",
    border: "2px solid #e2e8f0",
    borderRadius: "0.5rem",
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.2s",
  },
  timeButtonSelected: {
    borderColor: "#3b82f6",
    backgroundColor: "#eff6ff",
    color: "#3b82f6",
  },
  instructorSection: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "1rem",
    marginBottom: "2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  instructorGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
  },
  instructorButton: {
    padding: "1.5rem",
    border: "2px solid #e2e8f0",
    borderRadius: "0.5rem",
    backgroundColor: "white",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    transition: "all 0.2s",
  },
  instructorButtonSelected: {
    borderColor: "#3b82f6",
    backgroundColor: "#eff6ff",
    color: "#3b82f6",
  },
  confirmationCard: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  confirmationTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#1e293b",
    textAlign: "center",
  },
  summarySection: {
    marginBottom: "2rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #e2e8f0",
  },
  totalSection: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
    color: "#3b82f6",
  },
  confirmButton: {
    width: "100%",
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    padding: "1rem",
    fontSize: "1.2rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  confirmationSuccess: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "3rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  successTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: "1rem",
  },
  successMessage: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#64748b",
  },
  supportInfo: {
    backgroundColor: "#f8fafc",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    marginBottom: "2rem",
  },
  homeButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  contactInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  contactCard: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "1rem",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
}
