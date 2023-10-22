const copyButton = document.getElementById("copy-button");
const saveButton = document.getElementById("save-button");
const lockButton = document.getElementById("lock-button");
const codeTextarea = document.getElementById("code-textarea");

copyButton.addEventListener("click", function() {
    codeTextarea.select();
    document.execCommand("copy");
});

lockButton.addEventListener("click", function() {
    codeTextarea.readOnly = !codeTextarea.readOnly;
    lockButton.textContent = codeTextarea.readOnly ? "Unlock" : "Lock";
});

saveButton.addEventListener("click", function() {
 
    const codeContent = codeTextarea.value;
    
   
    const blob = new Blob([codeContent], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);
    
   
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.txt';
    
   
    a.click();
    

    URL.revokeObjectURL(url);
});
