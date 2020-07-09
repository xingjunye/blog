/**
 * 简单封装本地存储
 */
const store = window.localStorage;

class LocalStorage {

  public static set(key: string, value: any ) {
    if( !store ) return;

    let v = value;

    try {
      if(typeof value === 'object') {
        v = JSON.stringify(v);
      }

      store.setItem(key, v);
    } catch (error) {
      
    }

  }

  public static get(key: string) {
    if( !store ) return;

    store.getItem(key);
  }

  public static getJson(key: string) {
    if( !store ) return;

    const data = store.getItem(key);
    
    if( data ) {
      try {

        return JSON.parse(data);

      } catch (error) {
        
      }
    }

    return null;
  }
  
  public static remove(key: string) {
    if( !store ) return;

    try {
      
      store.removeItem(key);

    } catch (error) {
      
    }
  }
  
}

export default LocalStorage;