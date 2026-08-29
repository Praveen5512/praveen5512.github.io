import { useEffect, useState } from "react";
import "../css/Availability.css";

const API_URL =
    "https://script.google.com/macros/s/AKfycbxajp-s8W5cxxOE2R1Q_zcPZQ6WNQ7_xigikTgxODDrnYKTCyJ7gAuYmbUrgPOq1VfiSw/exec?request=availability";

const Availability = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Failed to fetch availability");
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Availability API error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAvailability();
    }, []);

    const activeStatuses = data.filter(
        (item) => item.is_active === true
    );

    useEffect(() => {
        if (activeStatuses.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % activeStatuses.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [activeStatuses.length]);

    if (loading) {
        return (
            
            <div className="availability" >
                <span className="availability-orb loading" />

                <div className="availability-text availability-loading-text contacted-count">
                    Loading availability
                    <span className="loading-dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                </div>
                
            </div>
        );
    }

    if (activeStatuses.length === 0) {
        return null;
    }

    const isAvailable = activeStatuses.some(
        (item) => item.status === "available"
    );

    const currentStatus = activeStatuses[currentIndex];

    return (
        <div className="availability">
            <span
                className={`availability-orb ${
                    isAvailable ? "available" : "unavailable"
                }`}
            />

            <div className="availability-cube">
                <div
                    key={currentStatus.status_text}
                    className="availability-face"
                >
                    {currentStatus.status_text}
                </div>
            </div>
        </div>
    );
};

export default Availability;