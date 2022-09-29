
// Buttons_part
const all_topic_div = document.getElementById("topic_div");
const reminder_btn = document.getElementById("reminder_btn");
const topic_btn = document.getElementById("topic_btn");
const discuss_btn = document.getElementById("discuss_btn");
const reminder_ques_div = document.getElementById("reminder_sec_2");
let reminder_ques_div_visible = true;
let all_topic_div_visible = false;

let is_reminder_btn_on = true;
all_topic_div.classList.add("hide_all_topic_div")
reminder_btn.classList.add("reminder_btns_visited")
let is_topic_btn_on = false;
let is_discuss_btn_on = false;
reminder_btn.addEventListener("click", () => {
    if(is_reminder_btn_on === false ){
       
        reminder_btn.classList.add("reminder_btns_visited")

        reminder_ques_div.classList.remove("hide_reminder_ques_all")
        all_topic_div.classList.add("hide_all_topic_div")
        reminder_ques_div_visible = true
        is_reminder_btn_on = true;
    }
    if(is_topic_btn_on === true){
        topic_btn.classList.remove("reminder_btns_visited")
        is_topic_btn_on = false;
    }
    if(is_discuss_btn_on === true){
        discuss_btn.classList.remove("reminder_btns_visited")
        is_discuss_btn_on = false;
    }
    
})

topic_btn.addEventListener("click", () => {
    if(is_topic_btn_on === false){
        topic_btn.classList.add("reminder_btns_visited")
        all_topic_div.classList.remove("hide_all_topic_div")
        reminder_ques_div.classList.add("hide_reminder_ques_all")
        is_topic_btn_on = true;
    }
    if(is_reminder_btn_on === true){
        reminder_btn.classList.remove("reminder_btns_visited")
        is_reminder_btn_on = false;
    }
    if(is_discuss_btn_on === true){
        discuss_btn.classList.remove("reminder_btns_visited")
        is_discuss_btn_on = false;
    }
})
discuss_btn.addEventListener("click", () => {
    if(is_discuss_btn_on === false){
       
        discuss_btn.classList.add("reminder_btns_visited")
        is_discuss_btn_on = true;
    }
    if(is_reminder_btn_on === true){
        reminder_btn.classList.remove("reminder_btns_visited")
        is_reminder_btn_on = false;
    }
    if(is_topic_btn_on === true){
        topic_btn.classList.remove("reminder_btns_visited")
        is_topic_btn_on = false;
    }

})







