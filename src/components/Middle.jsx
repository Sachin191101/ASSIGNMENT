
function Middle() {
    return (
        <div class="metrics-container">
        <h2>Instant Dive into Your Performance Metrics</h2>

        <div class="metric-group">
          <div class="metric">
            <h3>Lifetime</h3>
          </div>
          <div class="metric">
            <h3>Last Week</h3>
          </div>
          <div class="metric">
            <h3>Last Month</h3>
          </div>
          <div class="metric">
            <h3>Last Year</h3>
          </div>
          <div class="metric">
            <h3>Customize Time Line</h3>
          </div>
        </div>



        <div class="data-container">
          
            <div id="shipmentUpdates" class="first">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <p>shipment Updates</p>
                  <p>Total Orders: 394</p>
                </div>
                
                <div style={{marginTop: "10px"}}>
                  <span>Delivered</span>
                  <span>Out for delivery</span>
                  <span>Transit</span>
                  <span>Pending</span>
                </div>

                <img src="./images/12.png" />


                
            </div>






            <div class="second">
                <h3>Star facts about your orders!!!</h3>
                <p>There are 8 shipments that have beeb in out for delivery for more than 3 days.</p>
                <p>There are 5 shipments in exception right now.</p>
                <p>The maximum chargebcks are from Miami.</p>
                <button>Check orders page</button>
            </div>



            <div class="third">
                <h3>Tracking Page Views Vs Orders</h3>
                <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>

                <div class="third-card">
                    <div>
                        <p>Orders</p>
                        <p class="number">80</p>
                    </div>
                    <img src="./images/3.png" />
                </div>
                <div class="third-card third-card-dark">
                    <div>
                        <p>Trackin Page Views</p>
                        <p class="number">44</p>
                    </div>
                    <img src="./images/eye-outline.svg" />
                </div>
            </div>

        
        </div>
    </div>
    );
}

export default Middle;