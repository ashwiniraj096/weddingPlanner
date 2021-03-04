const addCategory = document.querySelector('.addCat');
const addCategoryAction = document.querySelector('#textbox');
const section = document.querySelector('.section');

addCategory.addEventListener('click', () => {
    addCategoryAction.innerHTML += `<div class='addCategoryAction' >
    <input
      style="width:200px;height:40px;"
      placeholder="Enter category here"
      id="input"
    />
    <button style="height: 40px" id="addCategory">Add</button>
  </div>`
    document.querySelector('#addCategory').addEventListener('click', (e) => {
        let val = document.querySelector('#input').value.trim();
        if (val) {
            let html = `
            <div class="category">
            <div id="itemForCategory">
              <p>${val}</p>
              <p>Total:</p>
            </div>
            <button class="button">Add</button>
          </div>
            `;
            section.innerHTML += html;
        }
        document.querySelector('#input').value = '';
    })

})

