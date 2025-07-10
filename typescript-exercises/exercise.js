var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Medium"] = 1] = "Medium";
    Priority[Priority["High"] = 2] = "High";
})(Priority || (Priority = {}));
// Create your task below:
var fellowshipTask = {
    id: 1,
    title: "Programming Task",
    description: "Finish Pre-Program work for fellowship",
    dueDate: "June 9th 2025",
    priority: Priority.High
};
// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(fellowshipTask);
