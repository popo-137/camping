import React from 'react';

const VacationForm = () => {
    return (
        <div className="formcontainer">
            <p className="book">Book your vacation</p>
            <div className="bookingform">
                <form>
                    <div className="form-group">
                        <span className="form-label">Destination</span>
                        <select className="form-control" placeholder="6730 Luna Land North Rhiannonmouth">
                            <option>6730 Luna Land North Rhiannonmouth</option>
                            <option>1380 Luna Land North Rhiannonmouth</option>
                            <option>8080 Luna Land North Rhiannonmouth</option>
                        </select>
                        <span className="select-arrow"></span>
                        <span className="form-label1">Check-in</span>
                        <input className="form-control1" type="date" id="date"  />
                        <span className="form-label2">Check-out</span>
                        <input className="form-control2" type="date" id="date" />
                        <span className="form-label3">Guests</span>
                        <select className="form-control3" placeholder="4 adults">
                            <option>1 adults</option>
                            <option>2 adults</option>
                            <option>3 adults</option>
                            <option>4 adults</option>
                            <option>5 adults</option>
                            <option>6 adults</option>
                        </select>
                        <span className="select-arrow3"></span>
                        <button className="search-btn">Search</button>
                    </div>
                    </form>
            </div>
        </div>
    );
};

export default VacationForm;