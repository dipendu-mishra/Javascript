console.log(this);
console.log(window.document);// this.docuemnt or document
let d=document;
console.log(d.all);// Not supporting by all browser.Not sugeested to allow
console.log(d.body);   //   HTMLElement
console.log(d.forms);  // HTMLCollection
console.log(d.forms);  
console.log(d.forms[0].parentElement)