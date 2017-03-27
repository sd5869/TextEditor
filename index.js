var tooltipOptions = document.querySelectorAll('.tooltip-option');
[].forEach.call(tooltipOptions, function(options) {
  options.addEventListener('click', function(e) {
    // console.log(e.target.id);
    if(this.id=="red")
    {
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('foreColor', false, this.id);
    }
    else if (this.id == "clear")
    {
      document.execCommand('removeFormat');
    }
    else
    {
      document.execCommand(this.id);
    }
  }, false);
});

$(document).ready(function() {
    $( "#list" ).sortable();
    $('.text').onmousedown = function () { this.focus(); };
    $('#list').keypress(function(e) {
      // console.log(e);
      var key = e.which;
      if (key == 13) // the enter key code
      {
        var inputText = $(e.target).text();
        console.log(inputText);
        var p = document.createElement('p');
        p.innerHTML = inputText;
        p.className = 'text';
        p.setAttribute('contenteditable', 'true');
        $(p).insertBefore(e.target);
        $(e.target).html('');
      }
    });

  });
