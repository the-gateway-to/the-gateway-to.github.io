import { reactive } from 'vue';
    import { v4 } from 'uuid';

class ModalContextImpl {
    ref = v4();
    id?: string;

    display(id: string): boolean {
        console.log({ modalContext: 'display', id });
        return this.id != null && this.id === id;
    }

    toggle(id?: string) {
        console.log({ modalContext: 'toggle', id });
        this.id = this.id == id ? undefined : id;
    }

    set(id?: string) {
        console.log({ modalContext: 'id', id });
        this.id = id;
    }

    unset(id?: string) {
        console.log({ modalContext: 'unset', id });
        this.id = this.id == id ? undefined : this.id;
    }

    clear() {
        console.log({ modalContext: 'clear' });
        this.id = undefined;
    }
}

export const ModalContext = reactive(new ModalContextImpl());
