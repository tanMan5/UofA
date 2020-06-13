$("#add-btn").on("click", function(event) {
  event.preventDefault();
  const newCharacter = {
    name: $("#name").val().trim(),
    role: $("#role").val().trim(),
    age: $("#age").val().trim(),
    forcePoints: $("#force-points").val().trim()
  };

  // Question: What does this code do??
  $.ajax({
    method: 'POST',
    url: '/api/characters',
    data: newCharacter
  })
  .then();
  
  $.post("/api/characters", newCharacter)
    .then(function(data) {
      console.log("add.html", data);
      alert("Adding character...");
    });
});