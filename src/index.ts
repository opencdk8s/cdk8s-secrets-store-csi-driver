import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';
export * as k8s from './imports/k8s';

export interface SecretObjectData {
  readonly objectName?: string;
  readonly key?: string;
}

export interface SecretObject {
  readonly secretName?: string;
  readonly type?: string;
  readonly labels?: { [key: string]: string};
  readonly annotations?: { [key: string]: string};
  readonly data?: SecretObjectData[];
}

export enum Provider {
  AWS = 'aws',
  VAULT = 'vault',
  AZURE = 'azure',
  GCP = 'gcp'
}

export interface SecretProviderClassSpec {
  readonly provider?: Provider;
  readonly parameters?: { [key: string]: any};
  readonly secretObjects?: SecretObject[];
}

export interface ByPodStatus {
  readonly id?: string;
  readonly namespace?: string;
}

export interface SecretProviderClassStatus {
  readonly byPod?: ByPodStatus[];
}

export interface SecretProviderClassProps {
  /**
   * Standard object's metadata.
   *
   */
  readonly metadata?: k8s.ObjectMeta;
  readonly spec?: SecretProviderClassSpec;
  readonly status?: SecretProviderClassStatus;
}

export interface SecretProviderClassListProps {
  readonly meta?: k8s.ListMeta;
  readonly items?: SecretProviderClassProps[];
}

export class SecretProviderClass extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'secrets-store.csi.x-k8s.io/v1',
    kind: 'SecretProviderClass',
  };
  /**
   * @param props initialization props
   */
  public static manifest(props: SecretProviderClassProps = {}): any {
    return {
      ...SecretProviderClass.GVK,
      ...props,
    };
  }

  /**
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: SecretProviderClassProps = {}) {
    super(scope, id, SecretProviderClass.manifest(props));
  }
}

export class SecretProviderClassList extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'secrets-store.csi.x-k8s.io/v1',
    kind: 'SecretProviderClassList',
  };
  /**
   * @param props initialization props
   */
  public static manifest(props: SecretProviderClassListProps = {}): any {
    return {
      ...SecretProviderClassList.GVK,
      ...props,
    };
  }

  /**
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: SecretProviderClassListProps = {}) {
    super(scope, id, SecretProviderClassList.manifest(props));
  }
}
