$('#news').live('click',function(){
                  var newboxes = document.getElementsByTagName("div");
                  for(var x=0; x<newboxes.length; x++) {
                        name = newboxes[x].getAttribute("class");
                        if (name == 'newsletter1') {
                              if (newboxes[x].id == 'newsletter') {
                                    if (newboxes[x].style.display == 'none') {
                                          newboxes[x].style.display = 'block';
                                    }
                                    else {
                                          newboxes[x].style.display = 'none';
                                    }
                              }
                        }
                  } 
});