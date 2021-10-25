import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'user_entity' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ unique: true, nullable: false })
  email!: string;

  @Column({ name: 'first_name' })
  firstName!: string;

  @Column({ name: 'last_name' })
  lastName!: string;

  @Column({ unique: true, nullable: false })
  username!: string;

  @Column({ type: 'boolean', default: true })
  enabled!: boolean;

  @Column({
    type: 'timestamp',
    name: 'created_timestamp',
    default: 'now()',
    nullable: false,
  })
  createdTimestamp!: string;
}
