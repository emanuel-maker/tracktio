# Casos de uso

Caso 1: Inserción de información (único caso codificado, para dar una idea de un posible desarrollo): Para la inserción de los datos considere aplicar el patrón de strategy para tener diferentes tipos de estrategias a la hora de evaluar las posibles políticas de retención de información.  Por otro lado, considere que, las compañías las guardamos en una nueva colección en donde estas contienen sus políticas de retención de la información, indicando el tipo de retención que se quiere aplicar. De esta manera, cuando se ejecuta la lógica de inserción de un registro, se verifica a qué compañía se refiere, recoge sus políticas y evalúa si esa política es aplicable a ese registro que se será insertado en base de datos. Posteriormente, antes de la inserción es importante hacer el cálculo de los campos expireAt usando la política aplicada a ese “reading” para que los jobs (que comentaré a continuación) funcionen correctamente. 

IMPORTANTE: En el ejemplo de codificación, aplique diferentes patrones, como arquitectura hexagonal, CQRS, Factory, Strategy.

Caso 2: Expiración de la información: para solucionar el problema de querer eliminar información que ya no es requerida en función de una ventana de tiempo, considere crear un job con jenkins que lo que haga sea ejecutar una lógica verificando que registró esta fuera de tiempo (esto gracias a un campo definido previamente en la inserción expireAt), en caso tal, marcaria en el registro de expirado a verdadero.  

Caso 3: Eliminación de la información: para este problema considere crear un segundo job en donde su trabajo sea verificar qué registros han expirado y eliminarlos. 
