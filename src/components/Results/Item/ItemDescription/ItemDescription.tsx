import { Component } from 'react';
import styles from './ItemDescription.module.css';

export default class ItemDescription extends Component {
  render() {
    return (
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam
        consequuntur saepe, cumque ut error eveniet aut porro molestias quia
        sequi dicta cum nihil optio corrupti mollitia iusto voluptates
        inventore. Autem, aspernatur libero explicabo sint veniam id quaerat sed
        enim accusantium, quam dolorum optio minima sequi sapiente magni ducimus
        alias iusto dignissimos corrupti. Quam, hic. Dolore veniam quaerat
        molestiae deleniti.
      </div>
    );
  }
}
