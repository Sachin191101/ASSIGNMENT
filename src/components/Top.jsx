
function Top() {
    return (
        <div class="container">
            <h1 class="title">Welcome, John Mathew</h1>

            <div class="cards-container">
                <div class="order-successful">
                    <p class="success-message">Order Sync Successful!</p>
                    <p class="message">Your order details from the last 30 days have been successfully synced. Check them out now!</p>
                    <button class="cta-button">Explore Your Orders</button>
                </div>

                <div class="customize-notification">
                    <h2 class="section-title">A Customize Customer Notification</h2>
                    <p class="section-description">Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
                    <button class="cta-button">Configure Notifications</button>
                </div>

                <div class="tracking-link">
                    <p class="section-title">℗ Your Tracking Link has been generated</p>
                    <p class="section-description">Include the Link to Your Store's Navigation Menu.</p>
                    <div class="card3-buttons">
                        <button class="cta-button cta-button2">Copy Link</button>
                        <button class="cta-button">Go To Navigation Menu</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Top;