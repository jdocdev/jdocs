---
slug: aumentar-tamano-swap
title: Aumenta el Tamaño del Archivo de Swap en Linux 
authors: [JuanDavid_Dev] 
tags: [tutorial, linux]
---

---

¿Tu sistema Linux está usando demasiado swap y necesitas más espacio? Aquí te guiaré paso a paso sobre cómo aumentar el tamaño del archivo de swap (/swap.img) para mejorar el rendimiento de tu sistema. 💻🚀

<!-- truncate -->

## Pasos para aumentar el tamaño del archivo de Swap 

**1. Desactivar el archivo de Swap existente**

Antes de hacer cambios en el archivo de swap, necesitas desactivarlo. Esto liberará el espacio para hacer modificaciones. Ejecuta el siguiente comando en tu terminal:

    ```bash
    sudo swapoff /swap.img
    ```

**2. Redimensionar el archivo de Swap**

Ahora que has desactivado el archivo de swap, es momento de aumentar su tamaño. Hay dos formas de hacerlo:

**Opción 1: Usar fallocate (más rápido)**

Si buscas rapidez, usa el siguiente comando para aumentar el archivo de swap a 8 GB:

    ```bash
    sudo fallocate -l 8G /swap.img
    ```

**Opción 2: Usar dd (más seguro, pero más lento)**

Si prefieres un enfoque más seguro (aunque algo más lento), puedes usar el comando dd:

    ```bash
    sudo dd if=/dev/zero of=/swap.img bs=1G count=8
    ```

**3. Establecer los permisos correctos**

Es fundamental que el archivo de swap solo sea accesible por el sistema. Asegúrate de establecer los permisos adecuados con el siguiente comando:

    ```bash
    sudo chmod 600 /swap.img
    ```

**4. Configurar el archivo de Swap**
Ahora, marca el nuevo archivo como espacio de swap con el siguiente comando:

    ```bash
    sudo mkswap /swap.img
    ```

**5. Activar el nuevo archivo de Swap**

Para activar el nuevo archivo de swap con su tamaño actualizado, ejecuta:

    ```bash
    sudo swapon /swap.img
    ```

**6. Verificar el cambio**

Para confirmar que el nuevo tamaño del swap ha sido aplicado correctamente, ejecuta el siguiente comando:

    ```bash
    free -h
    Deberías ver algo como esto en la salida
    ```

|       **Type**       | **Total** | **Used** | **Free** | **Shared** | **Buff/Cache** | **Available** |
|-----------------------|-----------|----------|----------|------------|----------------|---------------|
| **Mem**              | 7.7G      | 2.4G     | 4.3G     | 0.2G       | 1.0G           | 5.0G          |
| **Swap**             | 8.0G      | 0.0G     | 8.0G     | -          | -              | -             |



**7. Actualizar fstab (opcional pero recomendado)**

Si quieres que el archivo de swap se active automáticamente después de reiniciar tu sistema, edita el archivo /etc/fstab y añade esta línea:

    ```bash
    /swap.img none swap sw 0 0
    ```

Para editar el archivo, usa el siguiente comando:

    ```bash
    sudo nano /etc/fstab
    ```

Guarda y cierra el archivo (Ctrl + O, Enter, Ctrl + X en Nano).


### Bonus: Cambiar la prioridad de uso del swap

Este valor varía entre 0 y 100. Un valor bajo significa que el sistema usará menos el swap, mientras que un valor alto lo usará más.

**Ver el valor actual de swappiness**

El valor de vm.swappiness controla cuándo el sistema usará el swap en lugar de la RAM. Puedes ver su valor actual con el siguiente comando:

    ```bash
    cat /proc/sys/vm/swappiness
    ```

**Cambiar vm.swappiness temporalmente**

Si quieres modificar este valor temporalmente (hasta el siguiente reinicio), ejecuta:

    ```bash
    sudo sysctl vm.swappiness=valor
    ```

Por ejemplo:

    ```bash
    sudo sysctl vm.swappiness=80
    ```

**¿Por qué aumentar el tamaño del Swap?**

Aumentar el tamaño del archivo de swap es útil si tu sistema tiene poca RAM o si ejecutas aplicaciones que consumen mucha memoria como por ejemplo virtualización con de contenedores con Docker. Con más swap, tu sistema tendrá espacio adicional para almacenar información, lo que puede mejorar el rendimiento general, especialmente cuando hay mucha carga en la memoria.

---

