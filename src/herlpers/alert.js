import swal from 'sweetalert';

export const showError = (title, message) => {
    swal(title, message, "error");
}

export const showSuccess = (title, message) => {
    swal(title, message, "success");
}

export const showInfo = (title, message) => {
    swal(title, message, "info");
}