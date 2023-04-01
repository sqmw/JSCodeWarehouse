// 变换登陆注册
const changeToLogin = document.getElementById("changeToLogin")
const changeToRegister = document.getElementById("changeToRegister")
const loginAndRegister = document.getElementById("loginAndRegister")

// 表示的是从注册改变到登陆状态
changeToLogin.addEventListener("click", ()=>{
	loginAndRegister.className = "container"
})

// 表示的是从登陆状态转化到注册状态
changeToRegister.addEventListener("click", ()=>{
	loginAndRegister.className = "container log-in"
}) 