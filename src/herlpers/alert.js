import swal from 'sweetalert2'

export const showError = (title, message) => {
    swal.fire({
        title,
        text: message,
        icon: "error",
        buttons: true,
        confirmButtonColor: '#3b82f6',
    });
}

export const showSuccess = (title, message) => {
    swal.fire({
        title,
        text: message,
        icon: "success",
        buttons: true,
        confirmButtonColor: '#3b82f6',
    });
}

export const showInfo = (title, message) => {
    swal.fire({
        title,
        text: message,
        icon: "info",
        buttons: true,
        confirmButtonColor: '#3b82f6',
    });
}

export const showConfirm = (title, message) => {
    return  swal.fire({
        title,
        text: message,
        icon: "warning",
        buttons: true,
        dangerMode: true,
        confirmButtonColor: '#3b82f6',
    });
}

export const showInputNumber = async (title) => {
    return swal.fire({
        title: title,
        input: 'number',
        inputLabel: 'Ingresa el nuevo precio del procuto',
        inputPlaceholder: '100',
        showCancelButton: true,
        confirmButtonColor: '#3b82f6',
        inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value > 100) {
                resolve()
              } else {
                resolve('Ingresa un precio mayor a 100')
              }
            })
          }
      });
}