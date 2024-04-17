
import css from "./page.module.css";

export default function Home() {
  
  return (
   <main>
     <div>
      <img src="https://live.staticflickr.com/2400/2059939514_3bd36f6fa2_w.jpg"/>
    </div>
    <div>
      <h1>Welcome!</h1>
      <p>My name is Dan. I teach stuff. Nice to meet you...</p>
    </div>
    <div>
      <h3>How to cook pasta</h3>
      <ol className="list-inside list-decimal">
        <li>Boil Water</li>
        <li>Add Pasta</li>
        <li>Stir frequently for 12 minutes</li>
        <li>Drain Pasta</li>
        <li>Add sauce, vegetables, proteins, enjoy</li>
      </ol>
    </div>
    <div>
      <h3>My Schedule</h3>
      <table className={css.myTable}>
        <thead>
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>8:00 AM - 10:00 AM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CS290</td>
            </tr>
            <tr>
                <td>10:00 AM - 12:00 PM</td>
                <td></td>
                <td>Engr103</td>
                <td></td>
                <td>Engr103</td>
                <td></td>
            </tr>
            <tr>
                <td>12:00 PM - 2:00 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>2:00 PM - 4:00 PM</td>
                <td>CS494</td>
                <td></td>
                <td>CS494</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>4:00 PM - 6:00 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    </div>
   
   </main>
  );
}
