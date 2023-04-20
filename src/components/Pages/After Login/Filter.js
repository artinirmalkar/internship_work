import React from "react";
import "./Fliter.css";

export default function Filter() {
  var expanded = false;
  const showCheckboxes = () => {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  };

  return (
    <div>
      <div>
        <form>
          <div class="multiselect">
            <div class="selectBox" onClick={showCheckboxes}>
              <select>
                <option>
                  <p>Country</p>
                </option>
              </select>
              <div class="overSelect"></div>
            </div>
            <div id="checkboxes">
              <label for="one">
                Uganda
                <input type="checkbox" id="one" />
              </label>
              <label for="two">
                Tanzania <input type="checkbox" id="two" />
              </label>
              <label for="three">
                Kenya <input type="checkbox" id="three" />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
