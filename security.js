$(document).ready(function () {
    $(document).contextmenu(function () {
        return false;
    });
});
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (event.keyCode == 121) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        event.preventDefault();
        Swal.fire({
            icon: 'error',
            text: "Please Don't Try To Inspect Our Code Because Too Many Hard Work Is Invested To Write The Programe",

        })
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        event.preventDefault();
        function topRightSmallToast(message, status) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: status,
                title: message
            });
        }
        topRightSmallToast("Please Dont Try To Do Copy", "error")
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        event.preventDefault();
        function topRightSmallToast(message, status) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: status,
                title: message
            });
        }
        topRightSmallToast("Please Dont Try To Open Browser Console", "error")
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'M'.charCodeAt(0)) {
        event.preventDefault();
        function topRightSmallToast(message, status) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: status,
                title: message
            });
        }
        topRightSmallToast("Not Editable", "error")
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'E'.charCodeAt(0)) {
        event.preventDefault();
        function topRightSmallToast(message, status) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: status,
                title: message
            });
        }
        topRightSmallToast("Network Inspection is Disabled", "error")
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'K'.charCodeAt(0)) {
        event.preventDefault();
        function topRightSmallToast(message, status) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: status,
                title: message
            });
        }
        topRightSmallToast("Please Dont Try To Open Browser Console", "error")
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        event.preventDefault();
        function topRightSmallToast(message, status) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: status,
                title: message
            });
        }
        topRightSmallToast("Please Dont Try See the Source code", "error")
    }
    if (e.keyCode == 'F10'.charCodeAt(0) || e.keyCode == 'F12'.charCodeAt(0)) {
        event.preventDefault();
        function topRightSmallToast(message, status) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: status,
                title: message
            });
        }
        topRightSmallToast("Please Dont Try To Inspect The code", "error")
    }
    if (event.ctrlKey && event.keyCode === 83) {
        event.preventDefault();
        // alert();
        Swal.fire({
            icon: 'error',
            text: "Please Dont Try To Copy Our Code Because Programming Is Not Easy",

        })
    }
}