$(document).ready(function() {
  const resultDiv = $('#result'); // 获取结果显示的 <div> 元素
  resultDiv.html('');

  const generateButton = $('#generateVariants');
  const clearButton = $('#clearButton');

  generateButton.click(function(event) {
      event.preventDefault();
      // 其他生成变体的逻辑...
  });

  clearButton.click(function(event) {
      event.preventDefault();
      // 清空所有内容
      resultDiv.empty();
      console.clear();
      // 可以添加其他需要清空的内容
  });
});
