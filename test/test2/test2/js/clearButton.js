$(document).ready(function() {
  const resultDiv = $('#result');
  resultDiv.html('');

  const generateButton = $('#generateVariants');
  const clearButton = $('#clearButton');

  generateButton.click(function(event) {
      event.preventDefault();
  });

  clearButton.click(function(event) {
      event.preventDefault();
      // 清空所有内容
      resultDiv.empty();
      console.clear();
      // 可以添加其他需要清空的内容
  });
});
