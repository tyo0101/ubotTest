const alertPlaceholder = document.getElementById('result');

export function appendAlert(message, type) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
      <div>${message}</div>
    </div>
  `;

  // alertPlaceholder.innerHTML = ''; // 清空原有内容
  alertPlaceholder.append(wrapper); // 將 alert 添加到頁面中
}