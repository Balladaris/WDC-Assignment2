const head = ["LeBron sets tone at Cavs media day", "Rajon Rondo breaks hand in fall", "LeBron: Patience is key for Cavs", "Jackson: Knicks can make playoffs", "Grizzlies sign F Michael Beasley"]
const date = ["September 27, 2014", "", "", "", ""]
const details = ["INDEPENDENCE, Ohio -- The satellite trucks started lining up for a spot close to the Cleveland Cavaliers' training facility early Friday morning. A huge tent was erected onsite as a temporary media workroom to accommodate the hundreds of reporters on hand for LeBron James' official return to the Cavs. He never did have a news conference this summer, if you remember. So whatever party the city of Cleveland was going to throw to celebrate the return of its prodigal son had to be Friday.", "", "", "", ""]

function openContent(evt, Name) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
  }