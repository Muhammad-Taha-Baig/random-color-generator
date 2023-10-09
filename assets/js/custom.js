const colorGenerate = () => {
    const copyIcon = document.querySelector("i");
    const randomCode = Math.floor(Math.random() * 16777215);
    const hexCode = "#" + randomCode.toString(16);
    document.querySelector("input").value = hexCode;
    document.body.style.backgroundColor = hexCode;

    copyIcon.addEventListener('click', () => {
        document.querySelector("input").select();
        navigator.clipboard.writeText(hexCode);
        document.querySelector("span").classList.add('active');

        setTimeout(
            () => {
            document.querySelector("span").classList.remove('active');
            window.getSelection().removeAllRanges();
            },
            1000
        )
    })
}



// event call
document.querySelector(".btn").addEventListener('click', colorGenerate);

// intial call
colorGenerate();