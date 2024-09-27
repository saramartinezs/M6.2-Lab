//window.onload = loaded;
window.onload = displayValue;

/**
 * Simple Function that displays the value of a radio button
 */
export function getRadioValue(){
    var radios = document.getElementsByName('group');
    let selectedValue = '';
  
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selectedValue = radios[i].value;  
          break;
        }
    }
    return selectedValue;
}

export function displayValue() {
    document.getElementById("radioSubmit").onclick = function() {
      let selectedValue = getRadioValue();
      alert(selectedValue);
    };
}
  
displayValue();
  
