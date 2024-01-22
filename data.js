<body>

 <form id="loginForm">
    <!-- ... -->
    <input type="submit" value="Login">
 </form>

 <script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      
      // Validate and authenticate the user.
      // For demonstration purposes, we'll simply log the credentials.
      console.log('Username:', username);
      console.log('Password:', password);
    });
 </script>

</body>